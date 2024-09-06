interface Props {
  webSocket: React.MutableRefObject<WebSocket | null>;
  GetMessage: (event: MessageEvent) => void;
}

const WebSocketSetting = ({ webSocket, GetMessage }: Props) => {
  webSocket.current = new WebSocket(
    "ws://e86d-106-101-2-188.ngrok-free.app/ws/chat"
  );
  webSocket.current.onopen = () => {
    console.log("WebSocket 연결!");
  };
  webSocket.current.onclose = (error) => {
    console.log(error);
  };
  webSocket.current.onerror = (error) => {
    console.log(error);
  };
  webSocket.current.onmessage = (event: MessageEvent) => {
    GetMessage(event);
  };
};

export default WebSocketSetting;
