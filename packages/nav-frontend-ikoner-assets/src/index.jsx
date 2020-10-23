/* eslint-disable */
// Generated by gulp svg-icon - do not modify manually

import * as React from "react";
import * as PropTypes from "prop-types";

const iconList = [
  "advarsel-sirkel-fyll",
  "feil-sirkel-fyll",
  "hamburger",
  "help-circle",
  "help-circle_hover",
  "info-sirkel-fyll",
  "ok-sirkel-fyll",
  "søk",
  "spinner-negativ",
  "spinner-transparent",
  "systemer",
  "x",
];

export default class Icon extends React.Component {
  static propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    kind: PropTypes.oneOf([
      "advarsel-sirkel-fyll",
      "feil-sirkel-fyll",
      "hamburger",
      "help-circle",
      "help-circle_hover",
      "info-sirkel-fyll",
      "ok-sirkel-fyll",
      "søk",
      "spinner-negativ",
      "spinner-transparent",
      "systemer",
      "x",
    ]).isRequired,
    onClick: PropTypes.func,
    preview: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    wrapperStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  };

  static defaultProps = {
    size: 32,
  };

  render() {
    const { kind, preview } = this.props;

    return preview ? this.renderPreview() : this.renderIcon(kind);
  }

  renderPreview() {
    return <div>{iconList.map((kind) => this.renderPreviewKind(kind))}</div>;
  }

  renderIcon(kind) {
    const { wrapperStyle } = this.props;

    if (wrapperStyle)
      return <div style={wrapperStyle}>{this.getIcon(kind)}</div>;

    return this.getIcon(kind);
  }

  renderPreviewKind(kind) {
    return (
      <div key={kind}>
        <h3>&lt;Icon kind="{kind}" /&gt;</h3>
        {this.renderIcon(kind)}
      </div>
    );
  }

  getIcon(kind) {
    const { height, onClick, size, style, width, ...props } = this.props;

    switch (kind) {
      default:
        return null;
      case "advarsel-sirkel-fyll":
        return (
          <svg
            {...props}
            focusable="false"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M12.205-.004l-.214.002a12.225 12.225 0 0 0-8.517 3.659C1.179 5.977-.053 9.013.002 12.208c.115 6.613 5.296 11.793 11.795 11.793l.212-.002c6.726-.116 12.105-5.595 11.99-12.21C23.883 5.178 18.702-.003 12.204-.003z"
                fill="#FFA733"
                fillRule="nonzero"
              />
              <path
                d="M12.027 19H12A1.499 1.499 0 0 1 11.973 16L12 16a1.501 1.501 0 0 1 .027 3z"
                fill="#3E3832"
              />
              <path
                d="M12 5a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z"
                fill="#3E3832"
                fillRule="nonzero"
              />
            </g>
          </svg>
        );
      case "feil-sirkel-fyll":
        return (
          <svg
            {...props}
            focusable="false"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M11.999 0C5.395 0 .013 5.372 0 11.976a11.923 11.923 0 0 0 3.498 8.493A11.925 11.925 0 0 0 11.977 24H12c6.603 0 11.986-5.373 12-11.978C24.013 5.406 18.64.012 11.999 0z"
                fillRule="nonzero"
                fill="#A13A28"
              />
              <path
                d="M12 10.651l3.372-3.372a.954.954 0 1 1 1.349 1.35L13.349 12l3.372 3.372a.954.954 0 1 1-1.35 1.349L12 13.349 8.628 16.72a.954.954 0 1 1-1.349-1.35L10.651 12 7.28 8.628A.954.954 0 1 1 8.63 7.28L12 10.651z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </g>
          </svg>
        );
      case "help-circle":
        return (
          <svg
            {...props}
            focusable="false"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox="0 0 18.2 18.2"
          >
            <path d="M9.1 0C4.1 0 0 4.1 0 9.1s4.1 9.1 9.1 9.1 9.1-4.1 9.1-9.1S14.1 0 9.1 0zm0 17.2C4.6 17.2 1 13.6 1 9.1S4.6 1 9.1 1s8.1 3.6 8.1 8.1-3.6 8.1-8.1 8.1z" />
            <circle cx="9.1" cy="13.8" r=".9" />
            <path d="M9.1 11.5c-.3 0-.5-.2-.5-.5V8.6c0-.3.2-.5.5-.5 1 0 1.9-.8 1.9-1.9s-.8-1.9-1.9-1.9c-1 0-1.9.8-1.9 1.9 0 .3-.2.5-.5.5s-.5-.2-.5-.4c0-1.6 1.3-2.9 2.9-2.9S12 4.7 12 6.3c0 1.4-1 2.6-2.4 2.8V11c0 .3-.2.5-.5.5z" />
          </svg>
        );
      case "hamburger":
        return (
          <svg
            {...props}
            focusable="false"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox="0 0 200 160"
          >
            <path d="M0 0h200v32H0zm0 64h200v32H0zm0 64h200v32H0z" />
          </svg>
        );
      case "help-circle_hover":
        return (
          <svg
            {...props}
            focusable="false"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox="0 0 18.22 18.22"
          >
            <title>Hjelp</title>
            <path
              fill="#2868B3"
              d="M9.1 0C4.1 0 0 4.1 0 9.1s4.1 9.1 9.1 9.1 9.1-4.1 9.1-9.1S14.1 0 9.1 0zm0 14.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zM9.6 9v1.9c0 .3-.2.5-.5.5s-.5-.2-.5-.5V8.5c0-.3.2-.5.5-.5 1 0 1.9-.8 1.9-1.8s-.8-1.9-1.9-1.9-1.8.8-1.8 1.8c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-1.6 1.3-2.9 2.8-2.9 1.4 0 2.5 1 2.8 2.4.3 1.6-.7 3.1-2.3 3.4z"
            />
          </svg>
        );
      case "info-sirkel-fyll":
        return (
          <svg
            {...props}
            focusable="false"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M12 0C5.382 0 0 5.382 0 12s5.382 12 12 12c6.617 0 12-5.382 12-12S18.617 0 12 0z"
                fill="#337C9B"
              />
              <path
                d="M12 5a1.566 1.566 0 1 1 .11 3.13A1.566 1.566 0 0 1 12 5zm2.976 12.01c.563 0 1.043.431 1.043.991s-.48.992-1.043.992H9.39c-.564 0-1.043-.431-1.043-.992 0-.56.479-.99 1.043-.99h1.6v-5.016h-.986c-.565 0-1.044-.43-1.044-.991 0-.56.48-.991 1.044-.991h2.03c.563 0 1.043.43 1.043.99v6.007h1.899z"
                fill="#FFF"
              />
            </g>
          </svg>
        );
      case "ok-sirkel-fyll":
        return (
          <svg
            {...props}
            focusable="false"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox="0 0 24 24"
          >
            <g fillRule="nonzero" fill="none">
              <path
                d="M12 0C5.383 0 0 5.384 0 12s5.383 12 12 12c6.616 0 12-5.384 12-12S18.616 0 12 0z"
                fill="#1C6937"
              />
              <path
                d="M9.64 14.441l6.46-5.839a.997.997 0 0 1 1.376.044.923.923 0 0 1-.046 1.334l-7.15 6.464a.993.993 0 0 1-.662.252.992.992 0 0 1-.69-.276l-2.382-2.308a.923.923 0 0 1 0-1.334.997.997 0 0 1 1.377 0l1.717 1.663z"
                fill="#FFF"
              />
            </g>
          </svg>
        );
      case "søk":
        return (
          <svg
            {...props}
            focusable="false"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox="0 0 24 24"
          >
            <path d="M9 18c2.131 0 4.09-.75 5.633-1.992l7.658 7.697c.389.393 1.021.395 1.414.004s.393-1.023.004-1.414l-7.668-7.707A8.941 8.941 0 0 0 18 9c0-4.963-4.037-9-9-9S0 4.037 0 9s4.037 9 9 9zM9 2c3.859 0 7 3.139 7 7 0 3.859-3.141 7-7 7-3.861 0-7-3.141-7-7 0-3.861 3.139-7 7-7z" />
          </svg>
        );
      case "spinner-negativ":
        return (
          <svg
            {...props}
            focusable="false"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox="0 0 50 50"
            preserveAspectRatio="xMidYMid"
          >
            <title>Venter...</title>
            <circle
              xmlns="http://www.w3.org/2000/svg"
              cx="25"
              cy="25"
              r="20"
              stroke="#eee"
              fill="none"
              strokeWidth="5"
            />
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="#888"
              fill="none"
              strokeWidth="5"
              strokeDasharray="50 155"
              strokeLinecap="round"
            />
          </svg>
        );
      case "spinner-transparent":
        return (
          <svg
            {...props}
            focusable="false"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox="0 0 50 50"
            preserveAspectRatio="xMidYMid"
          >
            <title>Venter...</title>
            <circle
              xmlns="http://www.w3.org/2000/svg"
              cx="25"
              cy="25"
              r="20"
              stroke="transparent"
              fill="none"
              strokeWidth="5"
            />
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="#7f756c"
              fill="none"
              strokeWidth="5"
              strokeDasharray="50 155"
              strokeLinecap="round"
            />
          </svg>
        );
      case "systemer":
        return (
          <svg
            {...props}
            focusable="false"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox="0 0 128 128"
          >
            <path d="M0 0h32v32H0zm48 0h32v32H48zm48 0h32v32H96zM0 48h32v32H0zm48 0h32v32H48zm48 0h32v32H96zM0 96h32v32H0zm48 0h32v32H48zm48 0h32v32H96z" />
          </svg>
        );
      case "x":
        return (
          <svg
            {...props}
            focusable="false"
            height={height || size}
            width={width || size}
            onClick={onClick}
            style={style}
            viewBox="0 0 65.1 65.1"
          >
            <path d="M8.486-.038L65.053 56.53l-8.485 8.485L0 8.447z" />
            <path d="M65.092 8.486L8.524 65.053.039 56.569 56.607 0z" />
          </svg>
        );
    }
  }
}
