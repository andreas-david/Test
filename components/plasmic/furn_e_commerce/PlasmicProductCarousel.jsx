// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eetRVbLy8gp7SoVBTaw9Ti
// Component: sJAucJnH9brm
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: z79hjkikzT8x/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_furn_e_commerce.module.css"; // plasmic-import: eetRVbLy8gp7SoVBTaw9Ti/projectcss
import * as sty from "./PlasmicProductCarousel.module.css"; // plasmic-import: sJAucJnH9brm/css
import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO"; // plasmic-import: 3ARh9zp0R4dn/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO"; // plasmic-import: 8kP4_slEpY1K/icon

export const PlasmicProductCarousel__VariantProps = new Array("slider");

export const PlasmicProductCarousel__ArgProps = new Array();

function PlasmicProductCarousel__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox__c0M7S)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___4Hu3V, {
            [sty.freeBox__slider_second___4Hu3VlwuOv]: hasVariant(
              variants,
              "slider",
              "second"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__bQIp
            )}
          >
            {"Great Design Collection"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wZonB,
              {
                [sty.text__slider_first__wZonB9T4E7]: hasVariant(
                  variants,
                  "slider",
                  "first"
                ),

                [sty.text__slider_second__wZonBlwuOv]: hasVariant(
                  variants,
                  "slider",
                  "second"
                ),

                [sty.text__slider_third__wZonBo1Al]: hasVariant(
                  variants,
                  "slider",
                  "third"
                )
              }
            )}
          >
            {hasVariant(variants, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant(variants, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__t32U0
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__p4AMw)}>
            <div className={classNames(projectcss.all, sty.freeBox__z2VdF)} />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__r8ATt,
                {
                  [sty.text__slider_second__r8ATtlwuOv]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),

                  [sty.text__slider_third__r8ATto1Al]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  )
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $299.00"
                : hasVariant(variants, "slider", "second")
                ? " $199.00"
                : " $399.00"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eQzwd,
                {
                  [sty.text__slider_first__eQzwd9T4E7]: hasVariant(
                    variants,
                    "slider",
                    "first"
                  ),

                  [sty.text__slider_second__eQzwDlwuOv]: hasVariant(
                    variants,
                    "slider",
                    "second"
                  ),

                  [sty.text__slider_third__eQzwDo1Al]: hasVariant(
                    variants,
                    "slider",
                    "third"
                  )
                }
              )}
            >
              {hasVariant(variants, "slider", "third")
                ? " $399.00"
                : hasVariant(variants, "slider", "second")
                ? " $299.00"
                : " $499.00"}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yvCi)}
          >
            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__bq8G)}
              text={"⊕ Add to cart"}
              type={"solidOrange"}
            />

            <LinkButton
              className={classNames("__wab_instance", sty.linkButton__w00Fr)}
              text={"More Info"}
              type={"blankOrange"}
            />
          </p.Stack>
        </p.Stack>

        <div className={classNames(projectcss.all, sty.freeBox__j00Tx)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img, {
              [sty.img__slider_first]: hasVariant(variants, "slider", "first"),
              [sty.img__slider_second]: hasVariant(
                variants,
                "slider",
                "second"
              ),

              [sty.img__slider_third]: hasVariant(variants, "slider", "third")
            })}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            src={
              hasVariant(variants, "slider", "third")
                ? {
                    src: "/plasmic/furn_e_commerce/images/slider3.png",
                    fullWidth: 553,
                    fullHeight: 475,
                    aspectRatio: undefined
                  }
                : hasVariant(variants, "slider", "second")
                ? {
                    src: "/plasmic/furn_e_commerce/images/slider2.png",
                    fullWidth: 528,
                    fullHeight: 559,
                    aspectRatio: undefined
                  }
                : {
                    src: "/plasmic/furn_e_commerce/images/slider1.png",
                    fullWidth: 507,
                    fullHeight: 549,
                    aspectRatio: undefined
                  }
            }
          />
        </div>
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___5Vboi)}
      >
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? CircleOIcon
              : hasVariant(variants, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__robyh, {
            [sty.svg__slider_second__robyhlwuOv]: hasVariant(
              variants,
              "slider",
              "second"
            ),

            [sty.svg__slider_third__robyho1Al]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg___4Ja9S, {
            [sty.svg__slider_first___4Ja9S9T4E7]: hasVariant(
              variants,
              "slider",
              "first"
            ),

            [sty.svg__slider_second___4Ja9SlwuOv]: hasVariant(
              variants,
              "slider",
              "second"
            ),

            [sty.svg__slider_third___4Ja9So1Al]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant(variants, "slider", "third")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__cOY7, {
            [sty.svg__slider_third__cOY7O1Al]: hasVariant(
              variants,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductCarousel__ArgProps,
      internalVariantPropNames: PlasmicProductCarousel__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel";
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps
  }
);

export default PlasmicProductCarousel;
/* prettier-ignore-end */
