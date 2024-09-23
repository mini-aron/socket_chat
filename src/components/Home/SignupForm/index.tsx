import { userIdState } from "@/atoms";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import * as S from "./style";

const SignupForm = () => {
  const [userId, setUserId] = useRecoilState<string>(userIdState);
  const router = useRouter();
  const submitHandle = () => {
    if (userId) router.push("/chat");
  };

  return (
    <S.Wrapper>
      <S.Title>
        무선
        <br />
        대화기
      </S.Title>
      <img
        src="https://lh4.googleusercontent.com/proxy/CGUr-ZIBnlswsVBAP-OT9nWC_4Kl8RvVLlaJBlyuJZo1Bg9aW-ZGdCpBAtj7R8YAsDy5QS_nGkTe7Vdg2y4nt0KnscfhEIlkTfJ7NEb72Aq-hA"
        width={200}
      />
      <S.Input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="닉네임을 적어주세요(20자 이내)"
        maxLength={20}
      />
      <S.Button onClick={submitHandle} userId={userId}>
        대화 시작
      </S.Button>
    </S.Wrapper>
  );
};

export default SignupForm;
