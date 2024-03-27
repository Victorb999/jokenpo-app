"use client";
// import { useTodos } from "@/hooks/useTodos";
import { Jokenpo } from "@/components/Jokenpo/Jokenpo";
export const MainForm = () => {
  // const { data, isLoading, error } = useTodos();

  // const renderData = () => {
  //   if (isLoading) {
  //     return <div>loading ...</div>;
  //   }
  //   if (error) {
  //     return <div>Error</div>;
  //   }
  //   if (data) {
  //     return <div>{JSON.stringify(data)}</div>;
  //   }
  // };

  return (
    <div
      className="flex flex-col
     justify-center items-center w-full h-[100dvh]"
    >
      <Jokenpo />
    </div>
  );
};
