import express from 'express';
import { UserDisplayName } from '../views/Utils';
// const router = express.Router();

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home', page: 'home_content', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'About Me', page: 'about_content', displayName: UserDisplayName(req) });
}

export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Projects', page: 'projects_content', displayName: UserDisplayName(req) });
}
export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Services', page: 'services_content', displayName: UserDisplayName(req) });
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Contact Me', page: 'contact_content', displayName: UserDisplayName(req) });
}


