

import React, { useState } from 'react';
import { InputBox } from '../components/InputBox';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';



export const Dashboard = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const navigate = useNavigate();
 
      const emails = [
         { id: 1, sender: 'Kejriwal', subject: 'Poking', date: '2024-04-01', message: 'Delhi toh meri hai' },
         { id: 2, sender: 'Modi', subject: 'Poking', date: '2024-03-30', message: 'Hahahah, go to...' },
         { id: 3, sender: 'R.Gandhi', subject: 'Poking', date: '2024-03-28', message: 'where is my mom??' },
         { id: 4, sender: 'Mamta didi', subject: 'Confused', date: '2024-03-28', message: 'Hamba hambaa romba romba chomba chomba' },
         { id: 5, sender: 'Sonia', subject: 'Pampering', date: '2024-03-28', message: 'Beta mai Italy aayi hu, ghumne' },
         { id: 6, sender: 'Naam hai Siddhu', subject: 'Thinking', date: '2024-03-28', message: 'soch raha hu aaj bjp, kal congress aise iterate karte rahu' },
         { id: 7, sender: 'Amit Shah', subject: 'Sabarmati express', date: '2024-03-28', message: 'aaj bete ko bcci dilaya hai, kal ICC dilaoonga' },
         { id: 8, sender: 'Manmohan Singh', subject: 'Prefers silence', date: '2024-03-28', message: 'shuuuu' },
   ];

  const handleClick = (id) => {
    setSelectedEmail(id === selectedEmail ? null : id);
    
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="bg-gray-200 px-4 py-2">
        <h1 className="text-lg font-semibold">Inbox</h1>
      </div>
      <div className="pt-4">
          <Button onClick={()=>{
            navigate("/composemail")
          }} label={"Write a mail"} />
        </div>
      <div>
        {emails.map(email => (
          <div key={email.id} className="border-b border-gray-200 px-4 py-3 cursor-pointer" onClick={() => handleClick(email.id)}>
            {selectedEmail === email.id ? (
              <div className="px-4 py-2">
                <p className="font-semibold">{email.sender}</p>
                <p className="text-sm text-gray-600">{email.subject}</p>
                <p className="text-sm text-gray-500">{email.date}</p>
                <p className="text-sm mt-2 font-bold">{email.message}</p>
                <div className='border-b border-gray-200 px-2 py-2'><h1>
                    Attachments below

                </h1>
                    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
</svg> </div>

                <InputBox placeholder="Reply"  />
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{email.sender}</p>
                  <p className="text-sm text-gray-600">{email.subject}</p>
                </div>
                <p className="text-sm text-gray-500">{email.date}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};



