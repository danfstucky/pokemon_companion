import talonService from '../../src/services/talonService';

describe('talonService', () => {
  describe('encloseInAngles', () => {
    it('wraps text in angle brackets', () => {
      expect(talonService.encloseInAngles('hello')).toBe('<hello>');
    });

    it('works with an empty string', () => {
      expect(talonService.encloseInAngles('')).toBe('<>');
    });

    it('works with multi-word text', () => {
      expect(talonService.encloseInAngles('hello world')).toBe('<hello world>');
    });
  });

  describe('scrollToId', () => {
    it('calls scrollIntoView with smooth behavior on the target element', () => {
      const mockScrollIntoView = vi.fn();
      const el = document.createElement('div');
      el.id = 'target';
      el.scrollIntoView = mockScrollIntoView;
      document.body.appendChild(el);

      talonService.scrollToId('target');

      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
      document.body.removeChild(el);
    });
  });
});
