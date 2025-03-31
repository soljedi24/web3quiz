import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const quizQuestions = [
  {
    question: "What is Web3?",
    options: [
      "A new version of the internet that uses blockchain technology",
      "A social media platform",
      "An online marketplace",
      "A programming language"
    ],   
    answer: 0 
  },
  {
    question: "Which blockchain is most commonly used for smart contracts?",
    options: ["Bitcoin", "Ethereum", "Solana", "Polkadot"],
    answer: 1
  },
  {
    question: "What is a cryptocurrency wallet used for?",
    options: [
      "To store and manage digital assets",
      "To play online games",
      "To browse the internet",
      "To send emails"
    ],
    answer: 0
  },
  {
    question: "What does 'DeFi' stand for?",
    options: [
      "Decentralized Finance",
      "Digital Federation",
      "Decentralized Files",
      "Dynamic Finance"
    ],
    answer: 0
  },
  {
    question: "What is an NFT?",
    options: [
      "A non-fungible token representing unique digital assets",
      "A type of cryptocurrency",
      "A programming framework",
      "A financial institution"
    ],
    answer: 0
  },
  {
    question: "Which of the following is NOT a cryptocurrency?",
    options: ["Bitcoin", "Ethereum", "PayPal", "Litecoin"],
    answer: 2
  },
  {
    question: "What is the main purpose of a smart contract?",
    options: [
      "To automate and enforce digital agreements without intermediaries",
      "To store cryptocurrency",
      "To create social media accounts",
      "To browse the web"
    ],
    answer: 0
  },
  {
    question: "What is gas in the context of Ethereum?",
    options: [
      "A fee paid to execute transactions on the Ethereum network",
      "A type of fuel used for mining",
      "A special kind of token",
      "A security feature"
    ],
    answer: 0
  },
  {
    question: "Which term refers to a digital ledger that records transactions in Web3?",
    options: ["Blockchain", "Database", "Spreadsheet", "Registry"],
    answer: 0
  },
  {
    question: "Which of these wallets provides the highest level of security?",
    options: ["Hot wallet", "Cold wallet", "Mobile wallet", "Web wallet"],
    answer: 1
  },
  {
    question: "What is the primary advantage of decentralization in Web3?",
    options: [
      "No single entity controls the network",
      "Faster internet speeds",
      "Better customer service",
      "Lower electricity usage"
    ],
    answer: 0
  },
  {
    question: "What is the native cryptocurrency of the Bitcoin blockchain?",
    options: ["Ethereum", "Litecoin", "Bitcoin", "Ripple"],
    answer: 2
  },
  {
    question: "Which of these networks is specifically designed for scalability in Web3?",
    options: ["Ethereum", "Solana", "Bitcoin", "Litecoin"],
    answer: 1
  },
  {
    question: "What is a DAO in Web3?",
    options: [
      "A decentralized autonomous organization",
      "A digital auction",
      "A blockchain developer tool",
      "A type of token"
    ],
    answer: 0
  },
  {
    question: "Which of the following best describes staking in Web3?",
    options: [
      "Locking up cryptocurrency to help secure a blockchain and earn rewards",
      "Sending cryptocurrency to another user",
      "Creating a smart contract",
      "Buying and selling NFTs"
    ],
    answer: 0
  }
];

const Web3Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (index === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
      <Card className="w-full max-w-lg p-6 bg-gray-800 rounded-2xl shadow-lg">
        <CardContent>
          {showScore ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold">Quiz Completed!</h2>
              <p className="text-lg">Your score: {score} / {quizQuestions.length}</p>
              <Button className="mt-4" onClick={() => window.location.reload()}>Retry Quiz</Button>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4">{quizQuestions[currentQuestion].question}</h2>
              <Progress value={((currentQuestion + 1) / quizQuestions.length) * 100} className="mb-4" />
              <div className="space-y-2">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <Button key={index} className="w-full" onClick={() => handleAnswer(index)}>
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Web3Quiz;
