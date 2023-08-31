import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdOutlineAdd, MdSend } from 'react-icons/md';
import Button from '@/components/Button';
import TextInput from '@/components/TextInput';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

// TODO: API 요청
const messages: Message[] = [
  {
    id: 1,
    text: 'hi',
    sender: 'user',
  },
  {
    id: 2,
    text: 'Hello! How can I assist you today?',
    sender: 'bot',
  },
  {
    id: 3,
    text: 'Do you have any ideas what I should have for dinner?',
    sender: 'user',
  },
  {
    id: 4,
    text: `Certainly! Here are 10 dinner ideas for eating out:

		Italian Restaurant: Enjoy some classic pasta dishes like spaghetti carbonara or fettuccine Alfredo.
		
		Mexican Restaurant: Tacos, burritos, enchiladas, or a hearty bowl of chili con carne could hit the spot.
		
		Sushi Bar: Treat yourself to a variety of fresh sushi rolls and sashimi.
		
		Steakhouse: Indulge in a juicy steak cooked to your preference, paired with sides like mashed potatoes or grilled vegetables.
		
		Indian Restaurant: Delight in the flavors of curry dishes like chicken tikka masala or vegetable korma.
		
		Mediterranean Restaurant: Enjoy dishes like falafel, hummus, kebabs, and gyros.
		
		Thai Restaurant: Try some flavorful Thai curry, pad Thai, or a refreshing papaya salad.
		
		Burger Joint: Savor a gourmet burger with all the fixings, along with some crispy fries.
		
		Japanese Ramen Shop: Warm up with a bowl of comforting ramen noodles topped with various ingredients.
		
		Seafood Restaurant: If you're a seafood lover, enjoy dishes like grilled fish, seafood pasta, or a seafood platter.
		
		Remember to consider any dietary restrictions or preferences you have when choosing a restaurant or dish. Enjoy your dinner out!`,
    sender: 'bot',
  },
];

export default function TestPage() {
  const { fmNo } = useParams();
  const [text, setText] = useState('');

  return (
    <main className="flex-1">
      <section className="h-full m-auto relative">
        {fmNo ? (
          <>
            <div>
              <ul className="flex flex-col gap-2.5 text-left h-[calc(100vh-11.875rem)] overflow-y-scroll">
                {messages.map((message) => (
                  <MessageItem key={message.id} message={message} />
                ))}
              </ul>
            </div>
            <form className="sticky bottom-0">
              <div className="max-w-screen-md flex p-4 relative m-auto">
                <TextInput
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Send a message"
                  className="px-4 py-4 shadow-md shadow-line/40"
                />
                <Button
                  type="submit"
                  disabled={!text}
                  className="w-fit p-2 absolute right-8 bottom-7 rounded-md text-xl disabled:bg-transparent disabled:text-line"
                >
                  <MdSend />
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-line">
            <h3>Please select a model.</h3>
            <p>
              Or click
              <span className="mx-2 font-semibold">
                <MdOutlineAdd className="inline-block" /> New Model
              </span>
              and start training your own LLM.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

interface MessageItemProps {
  message: Message;
}

function MessageItem({ message }: MessageItemProps) {
  return (
    <li
      className={`whitespace-pre-line p-4 ${
        message.sender === 'bot' && 'bg-neutral-100 border-y border-line'
      }`}
    >
      <div className="max-w-screen-md m-auto flex gap-4">
        <span>{message.sender === 'bot' ? '🤖' : '👤'}</span>
        <p>{message.text}</p>
      </div>
    </li>
  );
}
