/** @jsx React.DOM */
var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'TabPanel',

	getDefaultProps: function () {
		return {
			selected: false,
			id: null,
			tabId: null
		};
	},

	getClassNames: function() {
		this.props.classNames ? classNames(this.props.classNames) : false
	},

	render: function () {
    var children = this.props.selected ? this.props.children : null;

		return (
			<div role="tabpanel"
				id={this.props.id}
				aria-labeledby={this.props.tabId}
				style={{display: this.props.selected ? '' : 'none'}}
				className={this.getClassNames}
      >
        {children}
      </div>
		);
	}
});
