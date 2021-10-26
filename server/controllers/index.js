"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const Utils_1 = require("../views/Utils");
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home_content', displayName: (0, Utils_1.UserDisplayName)(req) });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Me', page: 'about_content', displayName: (0, Utils_1.UserDisplayName)(req) });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects_content', displayName: (0, Utils_1.UserDisplayName)(req) });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services_content', displayName: (0, Utils_1.UserDisplayName)(req) });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Me', page: 'contact_content', displayName: (0, Utils_1.UserDisplayName)(req) });
}
exports.DisplayContactPage = DisplayContactPage;
//# sourceMappingURL=index.js.map