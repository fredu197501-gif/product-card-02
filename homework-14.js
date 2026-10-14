export class Modal {
  #onOverlayClick = (event) => {
    if (event.target === this.overlay) {
      this.close();
    }
  };

  #onCloseButtonClick = () => {
    this.close();
  };

  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('auth-overlay');
    this.closeButton = this.modal.querySelector('#modal-close-button');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('auth-overlay-showed');
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.#onOverlayClick);
    }
    this.#initClose();
    console.log(this.modal.id, 'открыто?', this.isOpen());
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('auth-overlay-showed');
    this.overlay.removeEventListener('click', this.#onOverlayClick);
    this.closeButton?.removeEventListener('click', this.#onCloseButtonClick);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    document.getElementById(buttonId)
      .addEventListener('click', () => this.open());
  }

  #initClose() {
    this.closeButton?.addEventListener('click', this.#onCloseButtonClick);
  }
}
