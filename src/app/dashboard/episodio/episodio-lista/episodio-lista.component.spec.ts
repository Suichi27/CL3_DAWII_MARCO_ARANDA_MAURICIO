import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodioListaComponent } from './episodio-lista.component';

describe('EpisodioListaComponent', () => {
  let component: EpisodioListaComponent;
  let fixture: ComponentFixture<EpisodioListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodioListaComponent]
    });
    fixture = TestBed.createComponent(EpisodioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
