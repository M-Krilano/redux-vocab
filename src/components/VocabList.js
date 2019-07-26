import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import ListItem from "./ListItem";

class VocabList extends Component {
  _renderItem({ item }) {
    return <ListItem term={item} />;
  }

  render() {
    return (
      <FlatList
        style={{ width: "100%" }}
        data={this.props.terms}
        renderItem={this._renderItem}
        keyExtractor={term => term.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { terms: state.terms };
};

export default connect(mapStateToProps)(VocabList);
