import { RUSH_CONFIG } from '../content/rushContent';
import { CHAPTER_EVENTS } from '../content/eventsContent';

describe('Rush configuration', () => {
  it('has a valid rush status', () => {
    expect(['open', 'interest', 'closed']).toContain(RUSH_CONFIG.status);
  });

  it('has an apply URL when status is open', () => {
    if (RUSH_CONFIG.status === 'open') {
      expect(RUSH_CONFIG.applyUrl).toBeTruthy();
    }
  });
});

describe('Events content', () => {
  it('separates upcoming and past events', () => {
    const upcoming = CHAPTER_EVENTS.filter((e) => !e.isPast);
    const past = CHAPTER_EVENTS.filter((e) => e.isPast);
    expect(upcoming.length + past.length).toBe(CHAPTER_EVENTS.length);
  });

  it('has required fields on all events', () => {
    CHAPTER_EVENTS.forEach((event) => {
      expect(event.title).toBeTruthy();
      expect(event.date).toBeTruthy();
      if (!event.visual) {
        expect(event.image).toBeTruthy();
      }
    });
  });
});

describe('Site stats', () => {
  it('uses majors placeholder instead of companies count', async () => {
    const { buildSiteStats } = await import('./statsUtils');
    const stats = await buildSiteStats();
    const labels = stats.map((s) => s.label);
    expect(labels).toContain('Majors represented');
    expect(labels).not.toContain('Companies represented');
  });
});
