import { useEffect, useState } from "react";
import TestResultList from "../components/TestResultList";
import Header from "../components/Header";
import { getTestResults } from "../api/testResults";

const TestResult = () => {
  const currentUserId = JSON.parse(localStorage.getItem("user")).userId; // 현재 로그인한 사용자
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const results = await getTestResults();
        setTestResults(results);
      } catch (error) {
        console.error("Error fetching test results:", error);
      }
    };

    fetchTestResults();
  }, []);

  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center justify-center bg-white mt-16 p-8">
        <h1 className="text-3xl font-bold mb-8 text-primary-color">
          모든 테스트 결과
        </h1>
        <TestResultList
          testResults={testResults}
          currentUserId={currentUserId}
          setTestResults={setTestResults}
        />
      </div>
    </>
  );
};

export default TestResult;
