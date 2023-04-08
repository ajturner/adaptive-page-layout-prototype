import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hub-layout-row',
  styleUrl: 'hub-layout-row.css',
  shadow: true,
})
export class HubLayoutRow {
  @Prop() config: any;

  render() {
    return (
      <div class="row" style={this.config.style}>
        {this.config.sections.map((section) => (
          <hub-layout-section config={section}></hub-layout-section>
        ))}
      </div>
    );
  }
}
