import * as React from "react";
import { Switch } from "@mui/material/";
import { TextField, MenuItem } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import "./index.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

dayjs.locale("ja");

const label = {
  inputProps: { "aria-label": "Switch demo" },
};

//フィールドフォーマット
const fieldStyle = {
  width: "250px",
  margin: "10px",
};

//テキストフィールド背景色
const myStyle = {
  backgroundColor: "#f0f0f0",
};

//社員区分
const selectRank = [{ label: "正社員", value: "1" }];

export default function EmployeeRegist() {
  //氏名 カナ テキストフィールド値保持
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastKana, setLastKana] = useState("");
  const [firstKana, setFisrtKana] = useState("");

  //性別 テキストフィールド値保持
  const [gender, setGender] = useState("");

  //生年月日 テキストフィールド値保持
  const [birthday, setBirthday] = useState("");

  //雇用保険番号 テキストフィールド値保持
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");

  //入社年月日 テキストフィールド値保持
  const [joinDay, setJoinDay] = useState("");

  //退社年月日 テキストフィールド値保持
  const [leavDay, setLeavDay] = useState("");

  //社員区分 テキストフィールド値保持
  const [rank, setRank] = useState("");

  //システム利用開始年月 テキストフィールド値保持
  const [sysStart, setSysStart] = useState();

  //権限 スイッチ値保持
  const [regAuth, setRegAuth] = useState("");
  const [appAuth, setAppAuth] = useState("");
  const [adminAuth, setAdminAuth] = useState("");

  //メモ テキストフィールド値保持
  const [memo, setMemo] = useState("");

  //年月日DatePicker
  function BasicDatePicker() {
    return (
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        dateFormats={{ year: "YYYY年" }}
      >
        <DatePicker
          label="年/月/日"
          format="YYYY/MM/DD"
          slotProps={{ calendarHeader: { format: "YYYY年MM月" } }}
          sx={{
            minWidth: 250,
            margin: 1,
            marginLeft: 1.3,
            backgroundColor: "#f0f0f0",
          }}
        />
      </LocalizationProvider>
    );
  }

  //年月DatePicker
  function YmDatePicker() {
    const [value, setValue] = React.useState(dayjs());
    return (
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        dateFormats={{ year: "YYYY年" }}
      >
        <DatePicker
          defaultValue={dayjs("")}
          label="年/月"
          format="YYYY/MM"
          views={["year", "month"]}
          slotProps={{ calendarHeader: { format: "YYYY年MM月" } }}
          sx={{
            minWidth: 250,
            margin: 1,
            marginLeft: 1.3,
            backgroundColor: "#f0f0f0",
          }}
          value = {value}
          onChange={(newValue) => {
            setSysStart(newValue);
          }}
        />
      </LocalizationProvider>
    );
  }

  //ボタン押下処理
  const clickButton = () => {
    const pattern1 = /^\w{4}$/g;
    const pattern2 = /^\w{6}$/g;
    const pattern3 = /^\w{1}$/g;
    const res1 = pattern1.test(num1);
    const res2 = pattern2.test(num2);
    const res3 = pattern3.test(num3);
    let nameErr;
    let kanaErr;
    let numErr;
    console.log(lastName);
    console.log(firstName);
    console.log(lastKana);
    console.log(firstKana);
    console.log(gender);
    console.log(birthday);
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(joinDay);
    console.log(leavDay);
    console.log(rank);
    console.log(sysStart);
    console.log(regAuth);
    console.log(appAuth);
    console.log(adminAuth);
    console.log(memo);

    if (!lastName || !firstName) {
      nameErr = "※氏名が未入力です";
      if (!lastKana || !firstKana) {
        kanaErr = "※氏名カナが未入力です";
        if (!num1 || !num2 || !num3) {
          numErr = "※雇用保険番号が未入力です";
        }
      }
    }

    console.log(nameErr);
    console.log(kanaErr);
    console.log(numErr);
  };

  return (
    <>
      <table>
        <tr>
          <td>
            <script>nameErr</script>
          </td>
        </tr>
        <tr>
          <td>
            <script>kanaErr</script>
          </td>
        </tr>
        <tr>
          <td>
            <script>numErr</script>
          </td>
        </tr>
        <tr>
          <td>
            <label>氏名</label>
          </td>
          <td>
            <TextField
              label="姓"
              style={fieldStyle}
              sx={myStyle}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <TextField
              label="名"
              style={fieldStyle}
              sx={myStyle}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>氏名カナ</label>
          </td>
          <td>
            <TextField
              label="セイ"
              style={fieldStyle}
              sx={myStyle}
              onChange={(e) => {
                setLastKana(e.target.value);
              }}
            />
            <TextField
              label="メイ"
              style={fieldStyle}
              sx={myStyle}
              onChange={(e) => {
                setFisrtKana(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>性別</label>
          </td>
          <td>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="1"
                name="radio-buttons-group"
                style={{
                  width: "300px",
                  margin: "10px",
                }}
              >
                <FormControlLabel value="1" control={<Radio />} label="男性" />
                <FormControlLabel value="2" control={<Radio />} label="女性" />
                <FormControlLabel
                  value="0"
                  control={<Radio />}
                  label="その他"
                />
              </RadioGroup>
            </FormControl>
          </td>
        </tr>
        <tr>
          <td>
            <label>生年月日</label>
          </td>
          <td>
            <BasicDatePicker />
          </td>
        </tr>
        <tr>
          <td>
            <label>雇用保険番号</label>
          </td>
          <td div className="insNum">
            <TextField
              label="0000"
              style={{
                width: "65px",
                margin: "10px",
              }}
              sx={myStyle}
              onChange={(e) => {
                setNum1(e.target.value);
              }}
            />
            -
            <TextField
              label="000000"
              style={{
                width: "85px",
                margin: "10px",
              }}
              sx={myStyle}
              onChange={(e) => {
                setNum2(e.target.value);
              }}
            />
            -
            <TextField
              label="0"
              style={{
                width: "40px",
                margin: "10px",
              }}
              sx={myStyle}
              onChange={(e) => {
                setNum3(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>入社年月日</label>
          </td>
          <td>
            <BasicDatePicker />
          </td>
        </tr>
        <tr>
          <td>
            <label>退社年月日</label>
          </td>
          <td>
            <BasicDatePicker />
          </td>
        </tr>
        <tr>
          <td>
            <label>社員区分</label>
          </td>
          <td>
            <TextField
              id="selectRank"
              label="選択してください"
              select
              defaultValue="1"
              style={fieldStyle}
              sx={myStyle}
              onChange={(e) => {
                setRank(e.target.value);
              }}
            >
              {selectRank.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>
          </td>
        </tr>
        <tr>
          <td>
            <label>システム利用開始年月</label>
          </td>
          <td>
            <YmDatePicker />
          </td>
        </tr>
        <tr>
          <td>
            <label>勤怠登録権限</label>
          </td>
          <td>
            <Switch {...label} />
          </td>
        </tr>
        <tr>
          <td>
            <label>勤怠承認権限</label>
          </td>
          <td>
            <Switch {...label} />
          </td>
        </tr>
        <tr>
          <td>
            <label>管理者権限</label>
          </td>
          <td>
            <Switch {...label} />
          </td>
        </tr>
        <tr>
          <td>
            <label>メモ</label>
          </td>
          <td>
            <TextField
              type="text"
              multiline
              rows={3}
              style={{
                width: "750px",
                margin: "10px",
              }}
              sx={myStyle}
              onChange={(e) => {
                setMemo(e.target.value);
              }}
            />
          </td>
        </tr>
      </table>
      <Button
        variant="contained"
        style={{
          marginTop: "50px",
          marginLeft: "20px",
          marginBottom: "20px",
        }}
        onClick={clickButton}
      >
        登録
      </Button>
    </>
  );
}
