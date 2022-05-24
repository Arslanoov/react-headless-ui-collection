import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Upload from './Upload';

describe('Upload component', () => {
  it('should render items', () => {
    render(<Upload label="Some label" />);

    expect(screen.queryByTestId('input')).toBeInTheDocument();
    expect(screen.queryByText('Some label')).toBeInTheDocument();
  });

  it('should upload file', async () => {
    const onUploadSpy = jest.fn();

    render(<Upload onUpload={onUploadSpy} />);

    expect(onUploadSpy).not.toHaveBeenCalled();

    const FileInput = await screen.findByTestId('input');
    const uploadFile = new File(['filedata'], 'filename.png', { type: 'image/png' });
    await userEvent.upload(FileInput, uploadFile);

    expect(onUploadSpy).toHaveBeenCalledWith(uploadFile);
  });

  it('should be disabled', async () => {
    const onUploadSpy = jest.fn();
    const onErrorSpy = jest.fn();

    render(<Upload onUpload={onUploadSpy} onError={onErrorSpy} disabled />);

    expect(onUploadSpy).not.toHaveBeenCalled();
    expect(onErrorSpy).not.toHaveBeenCalled();

    const FileInput = await screen.findByTestId('input');
    const uploadFile = new File(['filedata'], 'filename.png', { type: 'image/png' });
    await userEvent.upload(FileInput, uploadFile);

    expect(onUploadSpy).not.toHaveBeenCalled();
    expect(onErrorSpy).not.toHaveBeenCalled();
  });

  it('should successfully validate file', async () => {
    const onUploadSpy = jest.fn();
    const onErrorSpy = jest.fn();

    render(
      <Upload onUpload={onUploadSpy} onError={onErrorSpy} maxSize={1024 * 10} formats={['image/png', 'image/jpg']} />
    );

    expect(onUploadSpy).not.toHaveBeenCalled();
    expect(onErrorSpy).not.toHaveBeenCalled();

    const FileInput = await screen.findByTestId('input');
    const uploadFile = new File(['filedata'], 'filename.png', { type: 'image/png' });
    await userEvent.upload(FileInput, uploadFile);

    expect(onUploadSpy).toHaveBeenCalledWith(uploadFile);
    expect(onErrorSpy).not.toHaveBeenCalled();
  });

  it('should validate file and trigger error cb', async () => {
    const onUploadSpy = jest.fn();
    const onErrorSpy = jest.fn();

    render(<Upload onUpload={onUploadSpy} onError={onErrorSpy} maxSize={0} formats={['application/pdf']} />);

    expect(onUploadSpy).not.toHaveBeenCalled();
    expect(onErrorSpy).not.toHaveBeenCalled();

    await userEvent.upload(
      await screen.findByTestId('input'),
      new File(['filedata'], 'filename.png', { type: 'image/png' })
    );

    expect(onUploadSpy).not.toHaveBeenCalled();
    expect(onErrorSpy).toHaveBeenCalledWith({
      maxSize: true,
      format: true,
      required: false,
    });

    await userEvent.upload(
      await screen.findByTestId('input'),
      new File(['filedata'], 'filename.pdf', { type: 'application/pdf' })
    );

    expect(onUploadSpy).not.toHaveBeenCalled();
    expect(onErrorSpy).toHaveBeenCalledWith({
      maxSize: true,
      format: false,
      required: false,
    });
  });
});
