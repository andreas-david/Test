// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eetRVbLy8gp7SoVBTaw9Ti
// Component: 7H-u0N_tYUf
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: z79hjkikzT8x/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: eetRVbLy8gp7SoVBTaw9Ti/projectcss
import * as sty from "./PlasmicFeatureItem.module.css"; // plasmic-import: 7H-u0N_tYUf/css

export const PlasmicFeatureItem__VariantProps = new Array();

export const PlasmicFeatureItem__ArgProps = new Array();

function PlasmicFeatureItem__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox___8Q0Sa)}>
        <div className={classNames(projectcss.all, sty.freeBox___54ERi)} />

        <div className={classNames(projectcss.all, sty.freeBox__zdCIq)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yk3Pk)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fYrnw
              )}
            >
              {"Unlimited Table Collection"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__g1XjU
              )}
            >
              {
                "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
              }
            </div>

            <div className={classNames(projectcss.all, sty.freeBox__zJ0M8)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__eUvEn
                )}
              >
                {"Starting from"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ctrmP
                )}
              >
                {" $399"}
              </div>
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___3UZyV)}
            >
              <LinkButton
                data-plasmic-name={"linkButton"}
                data-plasmic-override={overrides.linkButton}
                className={classNames("__wab_instance", sty.linkButton)}
                text={"View More"}
                type={"solidOrange"}
              />
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "linkButton"],
  linkButton: ["linkButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFeatureItem__ArgProps,
      internalVariantPropNames: PlasmicFeatureItem__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFeatureItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatureItem";
  } else {
    func.displayName = `PlasmicFeatureItem.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatureItem = Object.assign(
  // Top-level PlasmicFeatureItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    linkButton: makeNodeComponent("linkButton"),
    // Metadata about props expected for PlasmicFeatureItem
    internalVariantProps: PlasmicFeatureItem__VariantProps,
    internalArgProps: PlasmicFeatureItem__ArgProps
  }
);

export default PlasmicFeatureItem;
/* prettier-ignore-end */
