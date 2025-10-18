import { Application } from 'https://unpkg.com/@hotwired/stimulus/dist/stimulus.js'

import ProjectController from './project_controller.js'
import LandingController from './landing_controller.js'

window.Stimulus = Application.start()

Stimulus.register('project', ProjectController)
Stimulus.register('landing', LandingController)
