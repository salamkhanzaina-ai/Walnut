import os
import re
import sys

try:
    from PyPDF2 import PdfReader
except ImportError:
    print("Missing dependency: install PyPDF2 with 'pip install PyPDF2'.")
    sys.exit(1)


def load_pdf_text(pdf_path):
    if not os.path.exists(pdf_path):
        raise FileNotFoundError(f"PDF not found: {pdf_path}")

    reader = PdfReader(pdf_path)
    pages = []
    for page in reader.pages:
        text = page.extract_text() or ""
        pages.append(text.strip())
    return pages


def normalize_text(text):
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def rank_pages(query, pages, top_n=3):
    query_terms = set(normalize_text(query).split())
    scores = []
    for idx, page in enumerate(pages, start=1):
        page_terms = set(normalize_text(page).split())
        common = query_terms.intersection(page_terms)
        scores.append((len(common), idx, page))
    scores.sort(reverse=True, key=lambda item: item[0])
    return [page for score, idx, page in scores[:top_n] if score > 0]


def answer_query(query, pages):
    if not query.strip():
        return "Please ask a question about the PDF content."

    best_pages = rank_pages(query, pages)
    if not best_pages:
        return "I could not find a good answer in the provided PDF. Try rephrasing your question."

    response = "".join(f"\n--- Page context ---\n{page}\n" for page in best_pages)
    return (
        "I found the following relevant content from the PDF:\n"
        f"{response}\n"
        "Use it to answer your question or ask a more specific follow-up."
    )


def main():
    print("PDF Chatbot")
    print("Enter the path to your PDF file and then ask questions based on its content.")

    pdf_path = input("PDF path: ").strip('"')
    try:
        pages = load_pdf_text(pdf_path)
    except Exception as exc:
        print(f"Error loading PDF: {exc}")
        return

    print(f"Loaded PDF with {len(pages)} pages.")
    print("Ask a question, or type 'exit' to quit.")

    while True:
        query = input("Question: ").strip()
        if not query:
            continue
        if query.lower() in {"exit", "quit", "q"}:
            print("Goodbye.")
            break

        answer = answer_query(query, pages)
        print(answer)


if __name__ == "__main__":
    main()
