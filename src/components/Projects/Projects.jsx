import React from 'react'
import "./projects.css"
import ProjectsList from './ProjectsList'

function Projects() {
  return (
    <section className="projects section" id="projects">
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">Most recent projects</span>

        <ProjectsList/>
    </section>
  )
}

export default Projects
