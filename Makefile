.PHONY: install serve build deploy

install:
	uv venv .venv
	uv pip install --python .venv/bin/python -r requirements.txt

serve:
	.venv/bin/mkdocs serve --livereload -a localhost:8001

build:
	.venv/bin/mkdocs build

deploy:
	.venv/bin/mkdocs gh-deploy --force
