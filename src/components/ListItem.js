import React from "react";
import {
  LayoutAnimation,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
import { BlockSection } from "./common";

class ListItem extends React.Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }
  _renderDefinition() {
    const { term, expanded } = this.props;
    if (expanded) {
      return (
        <BlockSection>
          <Text style={{ flex: 1 }}>{term.definition}</Text>
        </BlockSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { term, id } = this.props.term;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.selectedTerm(id);
        }}
      >
        <View>
          <BlockSection>
            {console.log(term)}
            <Text style={titleStyle}>{term}</Text>
          </BlockSection>
          {this._renderDefinition()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedTermId === ownProps.term.id;
  return { expanded: expanded };
};
export default connect(
  mapStateToProps,
  actions
)(ListItem);
