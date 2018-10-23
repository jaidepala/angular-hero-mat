import { AddHeroModule } from './add-hero.module';

describe('AddHeroModule', () => {
  let addHeroModule: AddHeroModule;

  beforeEach(() => {
    addHeroModule = new AddHeroModule();
  });

  it('should create an instance', () => {
    expect(addHeroModule).toBeTruthy();
  });
});
