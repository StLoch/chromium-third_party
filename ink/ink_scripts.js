// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The include directives are put into Javascript-style comments to prevent
// parsing errors in non-flattened mode. The flattener still sees them.
// Note that this makes the flattener to comment out the first line of the
// included file but that's all right since any javascript file should start
// with a copyright comment anyway.

// <include src="ink/web/js/main.soy.js">
// <include src="ink/web/js/cursor_updater.js">
// <include src="ink/web/js/canvas_manager/canvas_manager.js">
// <include src="ink/web/js/embed/embed_component.js">
// <include src="ink/web/js/embed/events.js">
// <include src="ink/web/js/embed/embed.js">
// <include src="template/soy/soyutils_usegoog.js">
// <include src="ink_event.pb.js">
// <include src="sketchology/public/nacl/embed.soy.js">
// <include src="sketchology/public/nacl/sketchology_engine_wrapper.js">
// <include src="sketchology/public/js/common/color.js">
// <include src="sketchology/public/js/common/model.js">
// <include src="sketchology/public/js/common/undo_state_change_event.js">
// <include src="sketchology/public/js/common/proto_serializer.js">
// <include src="sketchology/public/js/common/util.js">
// <include src="sketchology/public/js/common/element_listener.js">
// <include src="sketchology/public/js/common/brush_model.js">
// <include src="sketchology/proto/rect_bounds.pb.js">
// <include src="sketchology/proto/elements.pb.js">
// <include src="sketchology/proto/animations.pb.js">
// <include src="sketchology/proto/sengine.pb.js">
// <include src="sketchology/proto/document.pb.js">
// <include src="wireserializer.js">
// <include src="closure/functions/functions.js">
// <include src="closure/base.js">
// <include src="closure/fs/url.js">
// <include src="closure/uri/utils.js">
// <include src="closure/uri/uri.js">
// <include src="closure/style/style.js">
// <include src="closure/crypt/crypt.js">
// <include src="closure/crypt/base64.js">
// <include src="closure/ui/component.js">
// <include src="closure/ui/idgenerator.js">
// <include src="closure/labs/useragent/platform.js">
// <include src="closure/labs/useragent/browser.js">
// <include src="closure/labs/useragent/util.js">
// <include src="closure/labs/useragent/engine.js">
// <include src="closure/string/const.js">
// <include src="closure/string/string.js">
// <include src="closure/string/typedstring.js">
// <include src="closure/structs/set.js">
// <include src="closure/structs/inversionmap.js">
// <include src="closure/structs/collection.js">
// <include src="closure/structs/structs.js">
// <include src="closure/structs/map.js">
// <include src="closure/proto2/serializer.js">
// <include src="closure/proto2/objectserializer.js">
// <include src="closure/proto2/message.js">
// <include src="closure/proto2/fielddescriptor.js">
// <include src="closure/proto2/descriptor.js">
// <include src="closure/html/safehtml.js">
// <include src="closure/html/safescript.js">
// <include src="closure/html/safestyle.js">
// <include src="closure/html/uncheckedconversions.js">
// <include src="closure/html/safestylesheet.js">
// <include src="closure/html/legacyconversions.js">
// <include src="closure/html/trustedresourceurl.js">
// <include src="closure/html/safeurl.js">
// <include src="closure/math/long.js">
// <include src="closure/math/irect.js">
// <include src="closure/math/size.js">
// <include src="closure/math/math.js">
// <include src="closure/math/rect.js">
// <include src="closure/math/coordinate.js">
// <include src="closure/math/box.js">
// <include src="closure/object/object.js">
// <include src="closure/reflect/reflect.js">
// <include src="closure/useragent/useragent.js">
// <include src="closure/useragent/product.js">
// <include src="closure/i18n/uchar.js">
// <include src="closure/i18n/bidi.js">
// <include src="closure/i18n/graphemebreak.js">
// <include src="closure/i18n/bidiformatter.js">
// <include src="closure/dom/tagname.js">
// <include src="closure/dom/classlist.js">
// <include src="closure/dom/asserts.js">
// <include src="closure/dom/nodetype.js">
// <include src="closure/dom/dom.js">
// <include src="closure/dom/tags.js">
// <include src="closure/dom/safe.js">
// <include src="closure/dom/browserfeature.js">
// <include src="closure/dom/htmlelement.js">
// <include src="closure/dom/vendor.js">
// <include src="closure/soy/soy.js">
// <include src="closure/soy/data.js">
// <include src="closure/format/format.js">
// <include src="closure/asserts/asserts.js">
// <include src="closure/array/array.js">
// <include src="closure/iter/iter.js">
// <include src="closure/events/eventid.js">
// <include src="closure/events/event.js">
// <include src="closure/events/listener.js">
// <include src="closure/events/listenable.js">
// <include src="closure/events/browserevent.js">
// <include src="closure/events/events.js">
// <include src="closure/events/browserfeature.js">
// <include src="closure/events/eventtarget.js">
// <include src="closure/events/eventhandler.js">
// <include src="closure/events/listenermap.js">
// <include src="closure/events/keycodes.js">
// <include src="closure/events/wheelevent.js">
// <include src="closure/events/eventtype.js">
// <include src="closure/disposable/idisposable.js">
// <include src="closure/disposable/disposable.js">
// <include src="closure/debug/debug.js">
// <include src="closure/debug/errorcontext.js">
// <include src="closure/debug/entrypointregistry.js">
// <include src="closure/debug/error.js">