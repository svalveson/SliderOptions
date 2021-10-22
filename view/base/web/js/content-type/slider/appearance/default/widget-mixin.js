/**
 * Copyright © 2021 SVDevelopments. All rights reserved.
 *
 * @package  SVDevelopments_SliderOptions
 * @author   SVDevelopments
 */

define([
    'jquery',
    'mage/utils/wrapper',
    'Magento_PageBuilder/js/events',
    'slick'
], function ($, wrapper, events) {
    'use strict';

    return function (sliderWidget) {
        return wrapper.wrap(sliderWidget, function (originalSliderWidgetFunction, config, sliderElement) {
            originalSliderWidgetFunction(config, sliderElement);

            const $element = $(sliderElement);

            $element.slick(
                'slickSetOption',
                'slidesToShow',
                $element.data('slides-to-show') ?? 1,
                false
            );

            $element.slick(
                'slickSetOption',
                'slidesToScroll',
                $element.data('slides-to-scroll') ?? 1,
                true
            );
        });
    };
});
