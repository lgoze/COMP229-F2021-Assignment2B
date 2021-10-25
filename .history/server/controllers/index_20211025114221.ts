import express from 'express';
import { UserDisplayName } from '../views/Utils';
const router = express.Router();

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home', content: 'home_content', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'About Me', content: 'about_content', displayName: UserDisplayName(req) });
}

export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Projects', content: 'projects_content', displayName: UserDisplayName(req) });
}
export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Services', content: 'services_content', displayName: UserDisplayName(req) });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Contact Me', content: 'contact_content', displayName: UserDisplayName(req) });
}


