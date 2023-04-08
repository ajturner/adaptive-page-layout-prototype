import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'hub-layout-section',
  styleUrl: 'hub-layout-section.css',
  shadow: true,
})
export class HubLayoutSection {
  @Prop() config: any;

  render() {
    return (
      <div class="section" style={this.config.style}>
        {this.config.cards.map((card) => (
          <hub-layout-card config={card}></hub-layout-card>
        ))}
      </div>
    );
  }
}
