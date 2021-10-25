"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const express_1 = __importDefault(require("express"));
const Utils_1 = require("../views/Utils");
const router = express_1.default.Router();
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', content: 'home_content', displayName: (0, Utils_1.UserDisplayName)(req) });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Me', content: 'about_content', displayName: (0, Utils_1.UserDisplayName)(req) });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', content: 'projects_content', displayName: (0, Utils_1.UserDisplayName)(req) });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', content: 'services_content', displayName: (0, Utils_1.UserDisplayName)(req) });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Me', content: 'contact_content', displayName: (0, Utils_1.UserDisplayName)(req) });
}
exports.DisplayContactPage = DisplayContactPage;
//# sourceMappingURL=index.js.map