# maiyosaji.com

A portfolio website for Maiyo Saji. This project was built using [Jekyll](https://jekyllrb.com/).

## Making Changes

The project is laid out to try and make updates to content as simple as possible. The bulk of the content lives in markdown files, reference the [markdown cheat sheet here](https://www.markdownguide.org/cheat-sheet) for guidance on formatting rich text in these files. The other content data lives in YAML data files. An important thing to note is that _indentation is very important_ in YAML. Incorrect indentation will cause data to be misinterpreted. For more info on YAML, reference the [yaml cheat sheet here](https://yamline.com/tutorial/)

_note:_ at the top of all markdown and html files there is a section with properties nested between two `---` lines. This section is called frontmatter, and it sets certain data values on each page. The most common piece of frontmatter data in this project is `title` which sets the page title (what shows up as the name of the page in the browser tab)

### About

To modify the about page, edit the markdown in [this file](https://github.com/msaji69/msaji69.github.io/blob/main/about.md). Any images embedded will always float to the left of the page, with text wrapping around it.

### CV

To modify the cv page, edit the markdown in [this file](https://github.com/msaji69/msaji69.github.io/blob/main/cv.md).

### Projects

To add/delete/modify projects, edit the YAML in [this file](https://github.com/msaji69/msaji69.github.io/blob/main/_data/projects.yml)

Each project should be nested under either `academic` or `creative` and structured as:

```yml
- title: Title of the project (displayed on card and in modal)
  year: year of the project (displayed on card and in modal)
  description: description of project (displayed in project modal)
  url: link to further project information (displayed in project modal)
  image: link or path to image (displayed on project card)
```

### Landing Page Art

To make changes to what artwork is displayed on the landing page, you'll need to modify the `LANDING_PAGE_ART` array in [this file](https://github.com/msaji69/msaji69.github.io/blob/main/assets/js/landing_controller.js). Simply add or remove any of the paths/links.
