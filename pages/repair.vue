<template>
  <section>
    <div class="container">
      <h1>Component Repair</h1>
      <p>
        With our new commponent repair facility located in Bloomfield, CT we now
        have expanded our capabilities even further. We can now perform most
        component repairs for the GG4/FT4 in house. In conjuction with our
        extensive inventory that means better pricing and shorter lead times.
      </p>

      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            class="nav-link work-row-grids active d-flex align-items-center"
            data-bs-toggle="tab"
            href="#menu1"
          >
            <div
              class="work-grids-img d-flex justify-content-center align-items-center"
            >
              <span class="mdi mdi-cog fs-3" aria-hidden="true"></span>
            </div>
            <div class="caption work-captn">
              <h4>Fuel Manifolds</h4>
              <p>Liquid, Gas, & Dual Fuel</p>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link work-row-grids d-flex align-items-center"
            data-bs-toggle="tab"
            href="#menu2"
          >
            <div
              class="work-grids-img d-flex justify-content-center align-items-center"
            >
              <span class="mdi mdi-cog fs-3" aria-hidden="true"></span>
            </div>
            <div class="caption work-captn">
              <h4>Fuel Pumps</h4>
              <p>Chandler Evans</p>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link work-row-grids d-flex align-items-center"
            data-bs-toggle="tab"
            href="#menu3"
          >
            <div
              class="work-grids-img d-flex justify-content-center align-items-center"
            >
              <span class="mdi mdi-cog fs-3" aria-hidden="true"></span>
            </div>
            <div class="caption work-captn">
              <h4>Starters</h4>
              <p>Garrett/AirResearch and TDI</p>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link work-row-grids d-flex align-items-center"
            data-bs-toggle="tab"
            href="#menu4"
          >
            <div
              class="work-grids-img d-flex justify-content-center align-items-center"
            >
              <span class="mdi mdi-cog fs-3" aria-hidden="true"></span>
            </div>
            <div class="caption work-captn">
              <h4>Everything Else</h4>
              <p>Gearboxes, Valves, Actuators, and More</p>
            </div>
          </a>
        </li>
      </ul>

      <div class="tab-content">
        <div id="menu1" class="tab-pane container active">
          <div class="row">
            <div class="col-md-6">
              <img
                src="images/gg4-liquid-fuel-manifolds-678162-678163.jpg"
                alt="Liquid fuel manifolds 678162/678163"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div id="menu2" class="tab-pane container fade">
          <div class="row">
            <div class="col-md-6">
              <img
                src="images/gg4-chandler-evans-fuel-pump-50452.JPG"
                alt="GG4 Chandler Evans fuel pump 50452"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div id="menu3" class="tab-pane container fade">
          <div class="row">
            <div class="col-md-6">
              <img
                src="images/gg4-garrett-airesearch-allied-signal-honeywell-starter-383288-1-1.jpg"
                alt="GG4 Garrett AiResearch / Allied Signal / Honeywell starter 383288-1-1"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
        <div id="menu4" class="tab-pane container fade">
          <div class="row">
            <div class="col-md-6">
              <img
                src="images/gg4-pratt-whitney-P&D-valve-1048280.jpg"
                alt="GG4 P&D (Pressure & Dump) valve."
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Johnson Turbine Support | Repair',
    }
  },
}
</script>

<style></style>
