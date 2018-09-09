---
name: "Jogo de Pong"
demo: "https://jamalchk.com/jogojs-0"
gh-page: "https://github.com/jamalchk/jogojs-0"

---

> https://www.zeolearn.com/magazine/github-pages-with-jekyll-scratch-up-your-own-blog

Let me show how to do this.

Create a directory named _projects/ inside the root of the blog directory. You can keep any name that you want to give to your collection. Just keep that _ at the beginning.

In your _config.yml file, add a block for collections like this:
title: Full Name
... # other fields
... # other fields
... # other fields
collections:
  - projects
create .md files for each project with the details filled in. For example, project1.md could look something like this:
---
name: "Project 1"
repo: "https://github.com/username/project1"
gh-page: "/project1"
liveurl: "https://project1.com/"
---
and so on for all the projects.

Create the page on which you want to show the projects, say projects.html. In that file, you can iterate over your collection of projects. Like this:
{ % for project in site.projects %}
    <span>{ { project.name }}</span>
    <span>{ { project.repo }}</span>
    <span>{ { project.gh-page }}</span>
    <a href="{ { project.liveurl }}">live-link</span>
{ % endfor %}
This way, maintaining that page becomes easier, all you have to update is those .md files, whenever the data changes. Refer collections in Jekyll’s docs for more.