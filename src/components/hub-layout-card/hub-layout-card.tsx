import { Component, Prop, h } from '@stencil/core';
import * as AdaptiveCards from 'adaptivecards';
import '@esri/calcite-components'



@Component({
  tag: 'hub-layout-card',
  styleUrl: 'hub-layout-card.css',
  shadow: true,
})
export class CardComponent {
  @Prop() config: any;
  cardElement: HTMLElement;

  componentDidLoad() {
    const adaptiveCard = new AdaptiveCards.AdaptiveCard();
    adaptiveCard.parse(this.config);
    const renderedCard = adaptiveCard.render();
    this.cardElement.appendChild(renderedCard);
  }

  render() {
    let content;
    switch (this.config.type) {
      case 'TextBlock':
        content = <calcite-tip style={this.config.style}>{this.config.text}</calcite-tip>;
        break;
      case 'Image':
        content = (
          <calcite-card>
            <img slot="thumbnail" src={this.config.url} style={this.config.style} alt={this.config.text} />
          </calcite-card>
        );
        break;
      case 'Map':
        content = (
          <calcite-map
            lat={this.config.lat}
            lon={this.config.lon}
            zoom={this.config.zoom}
            style={this.config.style}
          ></calcite-map>
        );
        break;
      // Add more case statements for other card types like weather, survey, etc.
    }

    return <div class="card" style={this.config.style}>{content}

      <calcite-chip value={this.config.type}>
        {this.config.type}
      </calcite-chip>
    </div>;
  }
}
