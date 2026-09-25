# ReaLiTea — Research literacy self-assessment

An interactive online instrument built on Parts II and III of the **ReaLiTea
Professional Development Framework**. It supports language teachers in
reflecting on their research literacy: one descriptor at a time, across
5 facets, 20 subsections and 64 competences, at four cumulative levels
(Initial, Emerging, Advancing, Established). Nothing is scored or graded; the
output is a profile and a self-set development plan.

All responses stay in the user's browser (`localStorage`); nothing is
transmitted. Responses can be exported to a file and loaded again later.

The repository also holds the **WP3 self-study modules** (Research Literacy of
Teachers, Modules 1–5) in [`modules/`](modules/) — see below.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The complete, self-contained app (React, runtime and Barlow fonts are embedded; no network access needed). |
| `framework.json` | **Required, not yet in the repo.** The framework's descriptors, loaded by `index.html` at start-up. |
| `modules/` | The WP3 self-study website (see below). |

## WP3 self-study modules (`modules/`)

Interactive self-study versions of the five RLT WP3 modules, with a home page.

| Path | Purpose |
| --- | --- |
| `modules/index.html` | Home page linking to the five modules. |
| `modules/module1.html` … `module5.html` | One page per module. Each is self-contained apart from `media/`; learners' responses autosave in the browser (`localStorage`) and can be exported to a Word (.docx) file. |
| `modules/media/` | Module 1 engagement video (H.264, 1280×720) and its poster image. |
| `modules/source/` | Build sources: `engine/` (shared app, styles, home), `data/` (module content), `img/` (logos) and `tools/` (build and test scripts). |

The pages load Barlow from Google Fonts and the `docx` library from jsDelivr
(for the Word export), so they need a network connection. They can be opened
directly or served with GitHub Pages; with Pages enabled on the root folder
they appear at `…/modules/`.

## Running it

Because the page loads `framework.json` with `fetch`, serve the folder over
HTTP rather than opening `index.html` directly:

```sh
python3 -m http.server 8000
# then open http://localhost:8000/
```

It can also be published as-is with GitHub Pages (Settings → Pages → deploy
from branch, root folder).

## `framework.json` format

The app reads the following structure (field names are the ones the code
uses):

```json
{
  "part1": [
    { "name": "Sociocultural influences", "questions": ["…", "…"] }
  ],
  "facets": [
    {
      "code": "A",
      "name": "…",
      "subsections": [
        {
          "code": "A1",
          "name": "…",
          "items": [
            {
              "code": "A1.1",
              "name": "…",
              "levels": ["Initial descriptor", "Emerging descriptor", "Advancing descriptor", "Established descriptor"]
            }
          ]
        }
      ]
    }
  ]
}
```

- `facets` A–E, each with four subsections (`A1`–`A4`, …), each holding its
  competence `items`.
- `levels` holds the four descriptors, verbatim from the framework, in order
  Level 1 → Level 4.
- `part1` holds the optional Part I reflection boxes (affordances and
  constraints), each with a list of prompt questions.
- The short path uses these item codes: A1.2, A2.3, A3.3, A4.1, B1.1, B2.1,
  B3.2, B4.3, C1.1, C2.2, C3.1, C4.1, D1.1, D2.2, D3.1, D4.1, E1.1, E2.1,
  E3.1, E4.2.

## Licence and funding

The ReaLiTea Project. (2026). *ReaLiTea Professional Development Framework*.
Licensed CC BY-SA 4.0. This tool reproduces the framework's descriptors
verbatim; it adds no levels, items or scores of its own.

Co-funded by the European Union (ERASMUS+ KA220-HED-000157446, ReaLiTea).
Views and opinions expressed are however those of the author(s) only and do
not necessarily reflect those of the European Union or the European Education
and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can
be held responsible for them.
