/ LibreWolf Hardening Configuration
// Place this file in your LibreWolf profile directory
// These settings will be applied automatically on browser startup

// Disable web beacons - stops sites from sending hidden background pings for tracking
user_pref("beacon.enabled", false);

// Block access to all motion/orientation sensors - prevents motion-based fingerprinting
user_pref("device.sensors.enabled", false);

// Specifically block motion sensors - stops tracking of device movement
user_pref("device.sensors.motion.enabled", false);

// Disable orientation sensors - stops detection of screen tilts or angles
user_pref("device.sensors.orientation.enabled", false);

// Stop telemetry about DNS-over-HTTPS - no reporting to Mozilla servers
user_pref("network.trr.confirmation_telemetry_enabled", false);

// Disable feature experimentation telemetry - avoids targeted configuration experiments
user_pref("nimbus.telemetry.targetingContextEnabled", false);

// Prevent telemetry framework initialization during shutdown - less data logging
user_pref("telemetry.fog.init_on_shutdown", false);

// Disable WebRTC - stops IP leaks through video/audio calls
// NOTE: Turn this back on if you use Discord, Meet, or other WebRTC services
user_pref("media.peerconnection.enabled", false);

// Hide battery information - prevents sites from fingerprinting device power data
user_pref("dom.battery.enabled", false);

// Block Gamepad API - stops connected controllers from leaking unique hardware data
user_pref("dom.gamepad.enabled", false);

// Disable geolocation - prevents websites from detecting your physical location
user_pref("geo.enabled", false);

// Stop Firefox from opening OS location settings - fully disables location prompts
user_pref("geo.prompt.open_system_prefs", false);

// Prevent websites from detecting copy/paste/cut actions - enhances privacy on input fields
user_pref("dom.event.clipboardevents.enabled", false);

// Stop all background data submission - no automatic telemetry uploads
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Force all connections through HTTPS - blocks insecure (HTTP) connections
user_pref("dom.security.https_only_mode_ever_enabled", true);

// Isolate scripts per site - prevents trackers from sharing cached resources across domains
user_pref("privacy.antitracking.isolateContentScriptResources", true);

// Ensure tracking protection applies everywhere - no exceptions for "trusted" sites
user_pref("privacy.trackingprotection.allow_list.convenience.enabled", false);

// Enable global tracking protection - blocks known tracking domains
user_pref("privacy.trackingprotection.enabled", true);

// Block social media trackers - protects against Facebook, Twitter, etc. embedding tracking scripts
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// Remove Google geolocation service URL - ensures no background geolocation requests
user_pref("geo.provider.network.url", "");

// Delete telemetry ID - prevents persistent identification of your profile
user_pref("toolkit.telemetry.cachedProfileGroupID", "");

// Remove telemetry encryption helper - disables data submission support
user_pref("toolkit.telemetry.dap.helper.hpke", "");

// Delete telemetry endpoint - ensures no telemetry destination
user_pref("toolkit.telemetry.dap.helper.url", "");

// Remove remaining telemetry encryption parameters - blocks telemetry communication entirely
user_pref("toolkit.telemetry.dap.leader.hpke", "");

// Stop remote changes to browser settings or experimental add-ons without permission
user_pref("app.normandy.enabled", false);

// Delete Normandy API URL - removes the web address for receiving remote instructions
user_pref("app.normandy.api_url", "");

// Stop constant "pings" to Mozilla servers when connecting to networks
user_pref("network.captive-portal-service.enabled", false);

// Only send "Referer" headers when hostnames match - stops cross-site tracking
user_pref("network.http.referer.XOriginPolicy", 2);

// Strip "Referer" header to just the domain - removes specific page paths
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// Stop background connections that predict your keystrokes
user_pref("browser.places.speculativeConnect.enabled", false);

// Force the browser to use proxy for WebRTC connections
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);