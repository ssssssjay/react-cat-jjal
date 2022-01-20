// 그냥 태그안에 전달값을 줄 수 있는데 이때는 칠드런으로 온다
const Title = (props) => {
  return <h1>{props.children}</h1>
}

export default Title;