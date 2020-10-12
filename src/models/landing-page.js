import api from '../utils/api';
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export const ABOUT = `71y012W5RPPhlXprKAZPN8`;
// This is the ID of the landing
// page we've created earlier.

// The LandingPage class returns a clean
// LandingPage object with only the data we need.
export class LandingPage {
  constructor({
    id = null,
    title = ``,
    bodyLong = ``,
    image = ``,
  } = {}) {
    this.id = id;
    this.title = title;
    this.bodyLong = bodyLong;
    this.image = image;
  }
}

// We use an adapter to bring the API response
// from the Contentful API into the correct format
// for our LandingPage class.
export function responseAdapter({ fields, sys }) {
  return new LandingPage({ ...fields, ...sys });
}

// We wrap the Contentful API client to format
// the response exactly the way we like it.
export default {
  async get(id) {
    return responseAdapter(await api.getEntry(id));
  },
};
