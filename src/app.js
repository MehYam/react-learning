class Portal extends React.Component {
	render() {
		return (
			<div className="portal">
				Welcome to the user portal
			</div>
			);
	}
}

ReactDOM.render(
  <Portal />,
  document.getElementById('main')
);