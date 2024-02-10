import { Input, Button, message } from "antd";
import { useCallback, useState } from "react";
import { useCreateMovie } from "../../hooks/mutation/movie";

const CreateMovieForm = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { mutateAsync: createMovieAsync } = useCreateMovie();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setlanguage] = useState("");

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await createMovieAsync({
        title,
        description,
        language,
      });

      messageApi.info("Movie Created Success!");

      setTitle("");
      setDescription("");
      setlanguage("");
    },
    [createMovieAsync, description, language, title, messageApi]
  );
  return (
    <>
      {contextHolder}
      <form onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: "7px" }}
          type="text"
          required
          placeholder="Title"
        />
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginBottom: "7px" }}
          type="text"
          required
          placeholder="Description"
        />
        <Input
          value={language}
          onChange={(e) => setlanguage(e.target.value)}
          style={{ marginBottom: "7px" }}
          type="text"
          required
          placeholder="Language"
        />
        <Button htmlType="submit">Submit</Button>
      </form>
    </>
  );
};

export default CreateMovieForm;
