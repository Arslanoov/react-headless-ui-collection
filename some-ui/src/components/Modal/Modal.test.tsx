import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Modal from './Modal';

describe('Modal component', () => {
  it('should render visible modal', () => {
    render(<Modal visible>Some content</Modal>);

    expect(screen.queryByText('Some content')).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('dialog').className).toContain('someui-modal_visible');
  });

  it('should not render not visible modal', () => {
    render(<Modal>Some content</Modal>);

    expect(screen.queryByText('Some content')).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('dialog').className).not.toContain('someui-modal_visible');
  });
});
