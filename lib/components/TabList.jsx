/** @jsx React.DOM */
var React = require('react');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'TabList',

  getClassNames: function() {
    this.props.classNames ? classNames(this.props.classNames) : false
  },

	render: function () {
		return (
			<ul role="tablist"
        className={this.getClassNames()}
      >
				{this.props.children}
			</ul>
		);
	}
});
