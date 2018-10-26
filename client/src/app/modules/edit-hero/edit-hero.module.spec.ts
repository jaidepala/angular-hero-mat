import { EditHeroModule } from './edit-hero.module';

describe('EditHeroModule', () => {
  let editHeroModule: EditHeroModule;

  beforeEach(() => {
    editHeroModule = new EditHeroModule();
  });

  it('should create an instance', () => {
    expect(editHeroModule).toBeTruthy();
  });
});
