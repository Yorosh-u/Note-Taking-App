import { Link } from 'react-router-dom';
import CancelBtn from './CancelBtn';
import { SaveBtn } from './SaveBtn';
import { FormEvent, useRef } from 'react';
import { NoteData } from '../Schema';

interface NoteFormProps {
  onSubmit: (data: NoteData) => void;
}

export function NoteForm({ onSubmit }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const BodyRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      body: BodyRef.current!.value,
      tags: [],
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2">
        {/* //Title */}
        <div className="w-full p-5 bg-white rounded-lg font-mono">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="unique-input"
          >
            Title
          </label>

          <input
            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter text here"
            type="text"
            id="unique-input"
            ref={titleRef}
            required
          />
        </div>
        {/* //Tags */}
        <div className="w-full p-5 bg-white rounded-lg font-mono">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="unique-input"
          >
            Tags
          </label>

          <input
            className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
            placeholder="Enter text here"
            type="text"
            id="unique-input"
            required
          />
        </div>
      </div>
      {/* Body */}
      <div className="w-full p-5 bg-white rounded-lg font-mono">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="unique-input"
        >
          Body
        </label>
        <textarea
          className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
          rows={15}
          placeholder="Enter text here"
          id="unique-input"
          ref={BodyRef}
          required
        />
      </div>
      <div className="flex justify-end pr-5">
        <SaveBtn />
        <Link to={'..'}>
          <CancelBtn />
        </Link>
      </div>
    </form>
  );
}
