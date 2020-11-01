import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { createPost } from "../../modules/posts";

function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };
  const clear = (e) => {};

  return (
    <div>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">게시글 등록</Typography>
          <TextField
            name="creator"
            variant="outlined"
            label="이름"
            fullWidth
            value={postData.creator}
            onChange={handleChange}
          />
          <TextField
            name="title"
            variant="outlined"
            label="제목"
            fullWidth
            value={postData.title}
            onChange={handleChange}
          />
          <TextField
            name="message"
            variant="outlined"
            label="메시지"
            fullWidth
            value={postData.message}
            onChange={handleChange}
          />
          <TextField
            name="tags"
            variant="outlined"
            label="태그"
            fullWidth
            value={postData.tags}
            onChange={handleChange}
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            등록
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            지우기
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default Form;
