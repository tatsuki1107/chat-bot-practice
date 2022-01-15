import React, { useState, useCallback } from "react";
// material-ui
import { Dialog } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { Button } from "@material-ui/core";

// component
import TextInput from "./TextInput";

const FormDialog = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const imputName = useCallback((event) => {
    setName(event.target.value)
  }, [setName])

  const imputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail])

  const inputDescription = useCallback((event) => {
    setDescription(event.target.value)
  }, [setDescription])

  const submitForm = () => {
    const payload = {
      text: 'お問い合わせがありました\n' +
        'お名前:' + name + '\n' +
        'Email:' + email + '\n' +
        '問い合わせ内容\n' + description
    }

    const url = 'https://hooks.slack.com/services/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';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(() => {
      alert('送信が完了しました。追ってご連絡します!')

      setName('');
      setEmail('');
      setDescription('')

      return props.handleClose()
    })
  }


  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
    >
      <DialogTitle id="alert-dialog-title">お問合せフォーム</DialogTitle>
      <DialogContent>
        <TextInput
          label={"名前(必須)"}
          multiline={false}
          rows={1}
          value={name}
          type={"text"}
          onChange={imputName}
        />
        <TextInput
          label={"メールアドレス(必須)"}
          multiline={false}
          rows={1}
          value={email}
          type={"email"}
          onChange={imputEmail}
        />
        <TextInput
          label={"お問い合わせ内容(必須)"}
          multiline={true}
          rows={5}
          value={description}
          type={"text"}
          onChange={inputDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>キャンセル</Button>
        <Button onClick={submitForm} autoFocus>
          送信する
        </Button>
      </DialogActions>
    </Dialog>
  )

}

export default FormDialog
