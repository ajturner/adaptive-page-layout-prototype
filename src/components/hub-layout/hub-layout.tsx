import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'hub-layout',
  styleUrl: 'hub-layout.css',
  shadow: true,
})
export class HubLayout {
  @Prop() configUrl: string;
  @State() layoutConfig: any;

  async componentWillLoad() {
    const response = await fetch(this.configUrl);
    this.layoutConfig = await response.json();
  }

  render() {
    return (
      <div class="layout">
        {this.layoutConfig &&
          this.layoutConfig.rows.map((row) => (
            <hub-layout-row config={row}></hub-layout-row>
          ))}
      </div>
    );
  }
}
