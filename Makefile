.PHONY: install serve build deploy

install:
	uv venv .venv
	uv pip install --python .venv/bin/python -r requirements.txt

serve:
	.venv/bin/mkdocs serve

build:
	.venv/bin/mkdocs build

deploy:
	.venv/bin/mkdocs gh-deploy --force
