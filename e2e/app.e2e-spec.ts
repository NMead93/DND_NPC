import { NpcPage } from './app.po';

describe('npc App', () => {
  let page: NpcPage;

  beforeEach(() => {
    page = new NpcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
