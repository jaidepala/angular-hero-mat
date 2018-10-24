import { ListHeroModule } from './list-hero.module';

describe('ListHeroModule', () => {
  let listHeroModule: ListHeroModule;

  beforeEach(() => {
    listHeroModule = new ListHeroModule();
  });

  it('should create an instance', () => {
    expect(listHeroModule).toBeTruthy();
  });
});
